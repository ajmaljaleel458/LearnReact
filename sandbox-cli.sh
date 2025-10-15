#!/bin/bash

command=$1
sandbox_name=$2
component_name=$3
sandbox_root="./src/sandboxes"

case $command in
  gen)
    if [ -z "$sandbox_name" ]; then
      echo "❌ Usage: ./sandbox-cli.sh gen <sandbox-name>"
      exit 1
    fi

    mkdir -p "$sandbox_root/$sandbox_name/components"
    cat > "$sandbox_root/$sandbox_name/App.tsx" <<EOF
export default function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Sandbox: $sandbox_name</h1>
      <p>Welcome to your isolated React sandbox.</p>
    </div>
  );
}
EOF
    echo "✅ Sandbox '$sandbox_name' created."
    ;;
  
  run)
    if [ -z "$sandbox_name" ]; then
      echo "❌ Usage: ./sandbox-cli.sh run <sandbox-name>"
      exit 1
    fi
    echo "export const ACTIVE_SANDBOX = '$sandbox_name';" > ./src/sandbox.config.ts
    npm run client:dev
    ;;
  
  add)
    if [ -z "$sandbox_name" ] || [ -z "$component_name" ]; then
      echo "❌ Usage: ./sandbox-cli.sh add <sandbox-name> <component-name>"
      exit 1
    fi

    comp_dir="$sandbox_root/$sandbox_name/components/$component_name"
    mkdir -p "$comp_dir"

    cat > "$comp_dir/$component_name.tsx" <<EOF
import './$component_name.css';

export default function $component_name() {
  return <div className="$component_name">Hello from $component_name!</div>;
}
EOF

    cat > "$comp_dir/$component_name.css" <<EOF
.$component_name {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
}
EOF

    cat > "$comp_dir/$component_name.test.tsx" <<EOF
import { render } from '@testing-library/react';
import $component_name from './$component_name';

test('renders $component_name', () => {
  render(<$component_name />);
});
EOF

    echo "✅ Component '$component_name' added to sandbox '$sandbox_name'."
    ;;
  
  *)
    echo "Usage: ./sandbox-cli.sh {gen <name>|run <name>|add <sandbox> <component>}"
    ;;
esac
