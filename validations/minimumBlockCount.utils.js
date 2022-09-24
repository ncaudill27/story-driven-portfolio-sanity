export default (blocks) => {
  let charCount = 0;

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    if (block._type === "block") {
      for (let j = 0; j < block.children.length; j++) {
        const s = block.children[j];
        if (s._type === "span") {
          charCount += s.text.length;
        }
      }
    }
  }

  return charCount >= 120
    ? true
    : `Character count should be over 120. Current: ${charCount}`;
};
