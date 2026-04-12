// Gokul D Portfolio - Testable Library Functions

const NAV_ITEMS = [
  { id: 'whoami',          label: 'whoami' },
  { id: 'education',       label: 'education' },
  { id: 'skills',          label: 'skills' },
  { id: 'experience',      label: 'experience' },
  { id: 'projects',        label: 'projects' },
  { id: 'certifications',  label: 'certifications' },
  { id: 'achievements',    label: 'achievements' }
];

/**
 * Synchronously runs one full typewriter cycle through all strings.
 * Returns the array of strings displayed (in order) during the cycle.
 * This is the pure/testable version — no DOM, no setTimeout.
 */
function runTypewriterCycle(strings) {
  const displayed = [];
  for (const str of strings) {
    // Simulate typing: at full length, the string is "displayed"
    displayed.push(str);
  }
  return displayed;
}

/**
 * Simulates scroll spy: given a section ID, returns the nav link IDs
 * that would be marked active.
 * Pure function — no DOM needed.
 */
function getActiveNavLinksForSection(sectionId, navItems) {
  return navItems
    .filter(item => item.id === sectionId)
    .map(item => item.id);
}

module.exports = { runTypewriterCycle, getActiveNavLinksForSection, NAV_ITEMS };
