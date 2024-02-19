// 受保护的命令: 执行前需要确认
export const protectedCommands = [
    'chmod',
    'chown',
    'dd',
    'mv',
]

// 受保护的命令: 禁止执行
export const disabledCommands = [
    'rm -rf /',
    ':(){ :|:& };:',
]

