class notwaitBlocks {

  constructor() {}

  getInfo() {
    return {
      id: 'notwait',
      name: 'notwait Blocks',
      menuIconURI: 'https://notwait.github.io/notwait-blocks/logo.svg',

      color1: '#00439c',
      color2: '#003273',
      color3: '#002c66',

      blocks: [
        {
          opcode: 'matrix',

          blockType: Scratch.BlockType.REPORTER,

          text: 'mono bitmap [matrix]',
          arguments: {
            matrix: {
              type: Scratch.ArgumentType.MATRIX
            }
          }
        },
        {
          opcode: 'if_else_reporter',

          blockType: Scratch.BlockType.REPORTER,

          text: '[t] if [bool] else [f]',
          arguments: {
            t: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'yes'
            },
            f: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'no'
            },
            bool: {
              type: Scratch.ArgumentType.BOOLEAN
            }
          }
        },
        {
          opcode: 'color',

          blockType: Scratch.BlockType.REPORTER,

          text: 'color [color]',
          arguments: {
            color: {
              type: Scratch.ArgumentType.COLOR
            }
          }
        },
        {
          opcode: 'pow',

          blockType: Scratch.BlockType.REPORTER,

          text: '[a] ^ [b]',
          arguments: {
            a: {
              type: Scratch.ArgumentType.NUMBER
            },
            b: {
              type: Scratch.ArgumentType.NUMBER
            
            }
          }
        },
        {
          opcode: 'string_to_bool',

          blockType: Scratch.BlockType.BOOLEAN,

          text: 'is [string] truthy?',
          arguments: {
            string: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'abc'
            }
          }
        }
      ]
    }
  }

  matrix({matrix}) {
    return matrix
  }
  string_to_bool({string}) {
    return string == 'false' ? false : string == '0' ? false : true
  }
  color({color}){
    return Number('0x' + color.slice(1))
  }
  if_else_reporter({t, bool, f}){
    return bool ? t : f
  }
  pow({a, b}){
    return a ** b
  }
}

Scratch.extensions.register(new notwaitBlocks());