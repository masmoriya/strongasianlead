import nextVitals from 'eslint-config-next/core-web-vitals';

const eslintConfig = [
  ...nextVitals,
  {
    ignores: ['.next/**', 'node_modules/**', 'agency-of-agency/**', 'public/**'],
  },
];

export default eslintConfig;
