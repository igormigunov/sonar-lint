module.exports = function (results) {
  const summary = { issues: [] };
  results.forEach((result) => {
    result.messages.forEach((msg) => {
      const logMessage = {
        engineId: 'eslint',
        ruleId: msg.ruleId,
        primaryLocation: {
          message: msg.message,
          filePath: result.filePath,
          textRange: {
            startLine: msg.line,
            endLine: msg.endLine,
            endColumn: msg.endColumn,
          },
        },
      };

      // The log message type and severity is up to you but you need to take in consideration SonarQube properties
      if (msg.severity === 1) {
        logMessage.type = 'CODE_SMELL';
        logMessage.severity = 'INFO';
      }
      if (msg.severity === 2) {
        logMessage.type = 'BUG';
        logMessage.severity = 'MAJOR';
      }
      summary.issues.push(logMessage);
    });
  });
  return JSON.stringify(summary);
};
