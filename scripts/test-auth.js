const apiClient = require('../app/lib/api').apiClient

async function testAuthentication() {
  console.log('🧪 Iniciando testes de autenticação...\n')

  try {
    // Teste 1: Login
    console.log('1. Testando login...')
    const loginResponse = await apiClient.login('admin@fishfarm.com', 'admin123')
    console.log('✅ Login bem-sucedido:', loginResponse.data.user.email)

    // Teste 2: Obter usuário atual
    console.log('\n2. Testando obtenção do usuário atual...')
    const userResponse = await apiClient.getCurrentUser()
    console.log('✅ Usuário obtido:', userResponse.data.user.name)

    // Teste 3: Listar tanques
    console.log('\n3. Testando listagem de tanques...')
    const tanquesResponse = await apiClient.testTanques()
    console.log('✅ Tanques obtidos:', tanquesResponse.data.length, 'tanques')

    console.log('\n🎉 Todos os testes passaram!')

  } catch (error) {
    console.error('❌ Erro no teste:', error.message)
    process.exit(1)
  }
}

// Executar apenas se chamado diretamente
if (require.main === module) {
  testAuthentication()
}

module.exports = testAuthentication