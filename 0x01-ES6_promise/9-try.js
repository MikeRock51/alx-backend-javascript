function guardrail(mathFunction) {
  const queue = [];

  try {
    const out = mathFunction();
    queue.push(out);
  } catch (err) {
    queue.push(`Error: ${err.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}

export default guardrail;
