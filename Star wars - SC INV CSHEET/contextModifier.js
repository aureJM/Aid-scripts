const modifier = (text) => {
  let modifiedText = text
  const lowered = text.toLowerCase();
  let stop = false;
  
  // Plugins
  modifiedText = simpleContextPlugin.contextModifier(modifiedText)
  trackingPlugin.execute(modifiedText)
  statsFormatterPlugin.execute(statsFormatterConfig)

  if (state.shouldStop) {
    state.shouldStop = false;
    stop = true;
  }


  const contextMemory = info.memoryLength ? text.slice(0, info.memoryLength) : ''
  const context = info.memoryLength ? text.slice(info.memoryLength + 1) : text
  const lines = context.split("\n")


  const combinedLines = lines.join("\n").slice(-(info.maxChars - info.memoryLength));
  const finalText = [contextMemory, combinedLines].join("");

  return { text: finalText, stop: stop };
}

modifier(text)