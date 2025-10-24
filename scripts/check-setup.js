const fs = require('fs')
const path = require('path')

function checkSetup() {
  console.log('🔍 Verificando configuração...\n')

  const requiredFiles = [
    '.env.local',
    'tailwind.config.js',
    'postcss.config.js',
    'next.config.js',
    'app/globals.css',
    'app/types/index.ts',
    'app/lib/prisma.ts'
  ]

  let allFilesExist = true

  requiredFiles.forEach(file => {
    const exists = fs.existsSync(path.join(process.cwd(), file))
    console.log(exists ? '✅' : '❌', file)
    if (!exists) allFilesExist = false
  })

  if (allFilesExist) {
    console.log('\n🎉 Todos os arquivos necessários estão presentes!')
    console.log('\nPróximos passos:')
    console.log('1. Execute: npm run setup')
    console.log('2. Execute: npm run dev')
    console.log('3. Acesse: http://localhost:3000')
  } else {
    console.log('\n❌ Alguns arquivos estão faltando. Verifique a configuração.')
    process.exit(1)
  }
}

checkSetup()