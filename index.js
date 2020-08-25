const test = require('tape')
const swarm = require('@geut/discovery-swarm-webrtc')
const crypto = require('crypto')

const SERVER = 'ws://localhost:4000'

test('p2p connection', (t) => {
  t.plan(1)

  const topic = crypto.randomBytes(32)

  const signal1 = swarm({
    bootstrap: [SERVER]
  })

  const signal2 = swarm({
    bootstrap: [SERVER]
  })

  signal1.once('connection', () => {
    t.pass('connected')
  })

  signal1.join(topic)
  signal2.join(topic)
})
