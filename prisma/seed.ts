import {
  PrismaClient,
  Role,
  TipoTanque,
  StatusTanque,
  Turno,
  MovTanqueTipo,
} from '@/app/generated/prisma';
import * as bcrypt from 'bcryptjs';

// Inicializa o Prisma Client
const prisma = new PrismaClient();

/**
 * Função para gerar dados de amostra para todos os modelos da base de dados.
 */
async function main() {
  console.log('Iniciando o seeding de dados COMPLETO...');
  const salt = await bcrypt.genSalt(10);

  // --- 1. SEED DE USUÁRIOS (User) - Diferentes Roles ---
  const passwordHash = await bcrypt.hash('Senha123', salt);

  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@aquatech.com' },
    update: {},
    create: {
      name: 'Admin Global',
      email: 'admin@aquatech.com',
      password: passwordHash,
      role: Role.ADMIN,
      permissions: ['ALL'],
    },
  });

  const operadorUser = await prisma.user.upsert({
    where: { email: 'operador@aquatech.com' },
    update: {},
    create: {
      name: 'João Operador',
      email: 'operador@aquatech.com',
      password: passwordHash,
      role: Role.OPERADOR,
      permissions: ['REGISTROS_WRITE', 'MOVIMENTACOES_WRITE'],
    },
  });

  const veterinarioUser = await prisma.user.upsert({
    where: { email: 'vet@aquatech.com' },
    update: {},
    create: {
      name: 'Dr. Maria Veterinária',
      email: 'vet@aquatech.com',
      password: passwordHash,
      role: Role.VETERINARIO,
      permissions: ['SAUDE_WRITE', 'BIOMETRIA_READ'],
    },
  });

  console.log('Usuários criados (Admin, Operador, Veterinário).');

  // --- 2. SEED DE TANQUES (Tanque) ---
  const tanque1 = await prisma.tanque.upsert({
    where: { nome: 'Tanque R500' },
    update: { status: StatusTanque.ATIVO },
    create: {
      nome: 'Tanque R500',
      volume_m3: 500.0,
      tipo: TipoTanque.CIRCULAR,
      status: StatusTanque.ATIVO,
      localizacao: 'Setor Norte, Pista 1',
    },
  });

  const tanque2 = await prisma.tanque.upsert({
    where: { nome: 'Tanque Racetrack A' },
    update: { status: StatusTanque.ATIVO },
    create: {
      nome: 'Tanque Racetrack A',
      volume_m3: 1200.0,
      tipo: TipoTanque.RACETRACK,
      status: StatusTanque.ATIVO,
      localizacao: 'Setor Sul',
    },
  });

  const tanqueVazio = await prisma.tanque.upsert({
    where: { nome: 'Tanque Escavado 3' },
    update: { status: StatusTanque.VAZIO },
    create: {
      nome: 'Tanque Escavado 3',
      volume_m3: 3500.0,
      tipo: TipoTanque.ESCAVADO,
      status: StatusTanque.VAZIO,
      localizacao: 'Área de Engorda',
    },
  });

  console.log('Tanques criados (Circular, Racetrack, Escavado - VAZIO).');

  // --- 3. SEED DE CICLOS DE PRODUÇÃO (CicloProducao) ---

  // Ciclo Ativo - Tanque 1
  const cicloT1Ativo = await prisma.cicloProducao.create({
    data: {
      tanque_id: tanque1.id,
      especie: 'Tilápia-do-Nilo',
      data_inicio: new Date('2025-09-01T00:00:00Z'),
      quantidade_inicial: 18000,
      quantidade_atual: 17950,
      peso_inicial_g: 5.0,
      peso_atual: 150.0,
      status: 'ativo',
    },
  });

  // Ciclo Ativo - Tanque 2
  const cicloT2Ativo = await prisma.cicloProducao.create({
    data: {
      tanque_id: tanque2.id,
      especie: 'Camarão Litopenaeus Vannamei',
      data_inicio: new Date('2025-10-10T00:00:00Z'),
      quantidade_inicial: 80000,
      quantidade_atual: 79000,
      peso_inicial_g: 0.5,
      peso_atual: 5.0,
      status: 'ativo',
    },
  });

  // Ciclo Finalizado (Histórico)
  const cicloT1Finalizado = await prisma.cicloProducao.create({
    data: {
      tanque_id: tanque1.id,
      especie: 'Pintado',
      data_inicio: new Date('2024-03-01T00:00:00Z'),
      data_fim: new Date('2024-10-01T00:00:00Z'),
      quantidade_inicial: 1000,
      quantidade_atual: 950,
      peso_inicial_g: 100.0,
      peso_atual: 2500.0,
      status: 'finalizado',
    },
  });

  // Linka os ciclos ativos aos tanques
  await prisma.tanque.update({
    where: { id: tanque1.id },
    data: { ciclo_atual_id: cicloT1Ativo.id },
  });
  await prisma.tanque.update({
    where: { id: tanque2.id },
    data: { ciclo_atual_id: cicloT2Ativo.id },
  });

  console.log('Ciclos de Produção criados (Ativos e Finalizado).');

  // --- 4. SEED DE PRODUTOS ESTOQUE (ProdutoEstoque) ---

  const racaoEngorda = await prisma.produtoEstoque.upsert({
    where: { nome: 'Ração Extrusada Engorda 38%' },
    update: {},
    create: {
      nome: 'Ração Extrusada Engorda 38%',
      categoria: 'Alimentação',
      tipo: 'Ração',
      unidade_medida: 'Saco',
      peso_por_unidade: 25.0,
      quantidade_unidades: 20, // 500kg
      estoque_atual_kg: 500.0,
      validade: new Date('2026-06-01T00:00:00Z'),
      custo_unitario: 150.0,
    },
  });

  const salParaTratamento = await prisma.produtoEstoque.upsert({
    where: { nome: 'Sal Grosso (Tratamento)' },
    update: {},
    create: {
      nome: 'Sal Grosso (Tratamento)',
      categoria: 'Saúde',
      tipo: 'Medicação',
      unidade_medida: 'Saco',
      peso_por_unidade: 50.0,
      quantidade_unidades: 5,
      estoque_atual_kg: 250.0,
      custo_unitario: 35.0,
    },
  });

  console.log('Produtos em Estoque criados (Ração e Tratamento).');

  // --- 5. SEED DE REGISTROS DIÁRIOS (RegistroDiario) ---

  await prisma.registroDiario.createMany({
    data: [
      // T1 - Manhã
      {
        tanque_id: tanque1.id,
        responsavel_id: operadorUser.id,
        data: new Date('2025-10-22T08:00:00Z'),
        turno: Turno.MANHA,
        temperatura_agua: 28.5,
        quantidade_kg: 50.0,
        mortalidade: 5,
        observacoes: 'Aceitação da ração excelente.',
      },
      // T1 - Tarde
      {
        tanque_id: tanque1.id,
        responsavel_id: operadorUser.id,
        data: new Date('2025-10-22T14:00:00Z'),
        turno: Turno.TARDE,
        temperatura_agua: 29.1,
        quantidade_kg: 55.0,
        mortalidade: 3,
      },
      // T2 - Noite (Com sobra)
      {
        tanque_id: tanque2.id,
        responsavel_id: operadorUser.id,
        data: new Date('2025-10-22T20:00:00Z'),
        turno: Turno.NOITE,
        temperatura_agua: 26.8,
        quantidade_kg: 10.0,
        mortalidade: 15,
        sobras: true,
        observacoes: 'Ração não foi totalmente consumida, monitorar.',
      },
    ],
  });

  console.log('Registros Diários criados.');

  // --- 6. SEED DE BIOMETRIA (Biometria) ---

  await prisma.biometria.create({
    data: {
      tanque_id: tanque1.id,
      responsavel_id: veterinarioUser.id,
      data_amostra: new Date('2025-10-15T00:00:00Z'),
      tamanho_amostra: 100,
      peso_total_kg: 15.04, // 150.4g de média
      peso_minimo: 120.5,
      peso_maximo: 180.2,
      comprimento_medio_cm: 22.5,
      observacoes: 'Lote com boa uniformidade de tamanho.',
      recomendacoes: 'Manter taxa de alimentação atual e reavaliar em 15 dias.',
    },
  });

  console.log('Registro de Biometria criado.');

  // --- 7. SEED DE QUALIDADE DA ÁGUA (QualidadeAgua) ---

  await prisma.qualidadeAgua.createMany({
    data: [
      {
        tanque_id: tanque1.id,
        responsavel_id: operadorUser.id,
        data_analise: new Date('2025-10-22T10:00:00Z'),
        oxigenio_dissolvido: 6.5,
        ph: 7.1,
        amonia: 0.1,
        nitrito: 0.0,
        temperatura: 28.8,
        transparencia_cm: 45,
      },
      {
        tanque_id: tanque2.id,
        responsavel_id: veterinarioUser.id,
        data_analise: new Date('2025-10-21T11:00:00Z'),
        oxigenio_dissolvido: 5.9,
        ph: 6.9,
        amonia: 0.25, // Nível um pouco elevado
        nitrito: 0.1,
        temperatura: 26.5,
        transparencia_cm: 30,
        notas: 'Amônia ligeiramente alta. Monitorar aerador.',
      },
    ],
  });

  console.log('Registros de Qualidade da Água criados.');

  // --- 8. SEED DE REGISTRO SAÚDE (RegistroSaude) ---

  await prisma.registroSaude.create({
    data: {
      tanque_id: tanque1.id,
      usuario_id: veterinarioUser.id,
      data_registro: new Date('2025-10-20T00:00:00Z'),
      sintomas: 'Presença de parasitas externos em nadadeiras.',
      percentual_afetado: 5.0,
      diagnostico: 'Ictioftiríase (Ponto Branco) em estágio inicial.',
      produto: 'Sal',
      dosagem: '2 ppm por 3 dias',
      dias_tratamento: 3,
      resultado: 'Em tratamento',
    },
  });

  console.log('Registro de Saúde criado.');

  // --- 9. SEED DE MOVIMENTAÇÃO TANQUE (MovimentacaoTanque) ---

  // Movimentação de Saída (Venda ou Transferência)
  await prisma.movimentacaoTanque.create({
    data: {
      tanque_id: tanque1.id,
      usuario_id: operadorUser.id,
      tipo_movimentacao: MovTanqueTipo.SAIDA_VENDA,
      data: new Date('2025-10-18T00:00:00Z'),
      quantidade: 50, // 50 peixes vendidos
      peso_medio_g: 160.5,
      motivo: 'Amostra para cliente.',
    },
  });

  console.log('Movimentação de Tanque (Saída/Venda) criada.');

  // --- 10. SEED DE MOVIMENTAÇÃO RAÇÃO (MovimentacaoRacao) ---

  // Movimentação de Entrada (Compra/Reposição de Estoque)
  await prisma.movimentacaoRacao.create({
    data: {
      produto_id: racaoEngorda.id,
      responsavel_id: adminUser.id,
      tipo_movimento: 'ENTRADA',
      data: new Date('2025-10-01T00:00:00Z'),
      quantidade_kg: 1000.0,
      observacoes: 'Recebimento de lote 456 da Fornecedora Ração Forte.',
    },
  });

  // Movimentação de Saída (Consumo/Uso no Tanque 1)
  await prisma.movimentacaoRacao.create({
    data: {
      produto_id: racaoEngorda.id,
      responsavel_id: operadorUser.id,
      tipo_movimento: 'SAIDA_CONSUMO',
      data: new Date('2025-10-22T00:00:00Z'),
      quantidade_kg: 105.0, // Consumo do dia T1 + T2
      observacoes: 'Uso total diário nos tanques ativos.',
    },
  });

  console.log('Movimentações de Ração criadas (Entrada e Saída).');

  console.log('------------------------------------');
  console.log('Seeding de dados COMPLETO concluído.');
  console.log('------------------------------------');
}

// Execução da função principal e tratamento de erros
main()
  .catch((e) => {
    console.error('Erro durante o Seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
