const { INTEGER } = require('../../constants')
const putU16 = require('../put_u16')
const put32 = require('../put_32')

/**
 * Encode Integer
 * @param value
 * @returns {Buffer}
 */
function putVarInt (value) {
  const type = putU16(INTEGER)
  const flag = putU16(0)
  const data = put32(value)

  // TODO x64

  return Buffer.concat([type, flag, data])
}

module.exports = {
  encode: (prepare, value) => putVarInt(value),
  type: (typeName, value) => typeName === 'number' && Number.isInteger(value)
}
