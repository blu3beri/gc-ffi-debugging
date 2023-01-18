'use strict'

const prof = require('v8-profiler-next')
const fs = require('fs')
const ffi = require('ffi-napi')

prof.setGenerateType(1)
const title = `prof-${new Date().toUTCString().replaceAll(" ","")}`

const libdebug = ffi.Library('../target/debug/libgc_ffi_debugging.dylib', {
  one_plus_two: ['int', []],
})

const profile = async (cb) => {
  prof.startProfiling(title, true)
  await cb()

  const p = prof.stopProfiling(title)
  p.export(function (_, result) {
    fs.writeFileSync(`../${title}.cpuprofile`, result)
    p.delete()
  })
}

profile(() => {
  libdebug.one_plus_two()
  libdebug.one_plus_two()
  libdebug.one_plus_two()
  libdebug.one_plus_two()
  libdebug.one_plus_two()
  libdebug.one_plus_two()
  libdebug.one_plus_two()
  libdebug.one_plus_two()
  libdebug.one_plus_two()
  libdebug.one_plus_two()
  libdebug.one_plus_two()
  libdebug.one_plus_two()
  libdebug.one_plus_two()
  libdebug.one_plus_two()
  libdebug.one_plus_two()
  libdebug.one_plus_two()
  libdebug.one_plus_two()
  libdebug.one_plus_two()
  libdebug.one_plus_two()
})
