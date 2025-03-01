module.exports = {
  // Pattern to match all component files (adjust this based on your folder structure)
  patterns: [
    'src/components/**/*.{tsx,ts,jsx,js}', // Match all .tsx, .ts, .jsx, .js files inside components folder
  ],
  
  // Optional: Specify a custom output path where merged components will be saved
  outputPath: 'src/uxpin', // You can change this as needed
  
  // Optional: Add additional settings here if needed (like metadata)
  mergeComponents: true, // Merge components if necessary
  
  // Optional: Enable Storybook metadata (if you have Storybook setup)
  addStorybookMeta: false, // Set to true if you are using Storybook
  
  // Optional: If you have custom mappings for design tokens or components, you can add them here
  designSystemMappings: {
    colors: {
      primary: '#007bff',
      secondary: '#6c757d',
      // Add any other mappings you might have
    },
    typography: {
      body: 'Arial, sans-serif',
      heading: 'Georgia, serif',
      // Add any other mappings you might have
    },
  },

  // Optional: You can define extra rules for merging components
  componentMergeRules: {
    // Example: Custom rules for merging components
  },

  // Optional: Custom rules for ignoring files or patterns
  ignorePatterns: [
    '**/*.test.{tsx,ts}',  // Ignore test files (if you have them)
    '**/*.stories.{tsx,ts}',  // Ignore Storybook stories files (if you have them)
  ],

  // Add the missing pageHeadTags property
  pageHeadTags: [],
};
