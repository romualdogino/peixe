-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'OPERADOR', 'VETERINARIO', 'GESTOR');

-- CreateEnum
CREATE TYPE "TipoTanque" AS ENUM ('CIRCULAR', 'ESCAVADO', 'RACETRACK', 'QUADRADO');

-- CreateEnum
CREATE TYPE "StatusTanque" AS ENUM ('ATIVO', 'MANUTENCAO', 'VAZIO', 'INATIVO');

-- CreateEnum
CREATE TYPE "Turno" AS ENUM ('MANHA', 'TARDE', 'NOITE');

-- CreateEnum
CREATE TYPE "MovTanqueTipo" AS ENUM ('ENTRADA_LOTE', 'SAIDA_VENDA', 'TRANSFERENCIA_SAIDA', 'TRANSFERENCIA_ENTRADA');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role",
    "image" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "lastLogin" TIMESTAMP(3),
    "permissions" TEXT[],

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tanques" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "codigo_interno" TEXT,
    "volume_m3" DOUBLE PRECISION NOT NULL,
    "area_m2" DOUBLE PRECISION,
    "tipo" "TipoTanque" NOT NULL,
    "tipo_material" TEXT,
    "status" "StatusTanque" NOT NULL DEFAULT 'ATIVO',
    "localizacao" TEXT,
    "data_instalacao" TIMESTAMP(3),
    "nivel_agua_cm" DOUBLE PRECISION,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "ciclo_atual_id" TEXT,

    CONSTRAINT "tanques_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ciclos_producao" (
    "id" TEXT NOT NULL,
    "tanque_id" TEXT NOT NULL,
    "especie" TEXT,
    "origem_lote" TEXT,
    "data_inicio" TIMESTAMP(3) NOT NULL,
    "data_fim" TIMESTAMP(3),
    "quantidade_inicial" INTEGER NOT NULL,
    "quantidade_atual" INTEGER,
    "peso_inicial_g" DOUBLE PRECISION NOT NULL,
    "peso_atual" DOUBLE PRECISION,
    "mortes" INTEGER,
    "alimentacao_total_kg" DOUBLE PRECISION,
    "custo_total" DOUBLE PRECISION,
    "data_prevista_saida" TIMESTAMP(3),
    "status" TEXT NOT NULL DEFAULT 'ativo',

    CONSTRAINT "ciclos_producao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "registros_diarios" (
    "id" TEXT NOT NULL,
    "tanque_id" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "turno" "Turno",
    "temperatura_agua" DOUBLE PRECISION NOT NULL,
    "quantidade_kg" DOUBLE PRECISION,
    "fracionamento" INTEGER,
    "tipo_racao" TEXT,
    "racao_marca" TEXT,
    "racao_codigo" TEXT,
    "sobras" BOOLEAN,
    "mortalidade" INTEGER,
    "causa_morte" TEXT,
    "horas_aeracao" DOUBLE PRECISION,
    "observacoes" TEXT,
    "eventos_adversos" TEXT,
    "responsavel_id" TEXT,
    "isAutomatic" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "registros_diarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "biometrias" (
    "id" TEXT NOT NULL,
    "tanque_id" TEXT NOT NULL,
    "data_amostra" TIMESTAMP(3) NOT NULL,
    "idade_lote_dias" INTEGER,
    "tamanho_amostra" INTEGER NOT NULL,
    "peso_total_kg" DOUBLE PRECISION NOT NULL,
    "peso_minimo" DOUBLE PRECISION,
    "peso_maximo" DOUBLE PRECISION,
    "comprimento_medio_cm" DOUBLE PRECISION NOT NULL,
    "comprimento_minimo" DOUBLE PRECISION,
    "comprimento_maximo" DOUBLE PRECISION,
    "altura_minima" DOUBLE PRECISION,
    "altura_maxima" DOUBLE PRECISION,
    "desvio_padrao_peso" DOUBLE PRECISION,
    "desvio_padrao_comprimento" DOUBLE PRECISION,
    "observacoes" TEXT,
    "recomendacoes" TEXT,
    "responsavel_id" TEXT,

    CONSTRAINT "biometrias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "qualidade_agua" (
    "id" TEXT NOT NULL,
    "tanque_id" TEXT NOT NULL,
    "data_analise" TIMESTAMP(3) NOT NULL,
    "hora_coleta" TEXT,
    "fonte_agua" TEXT,
    "metodo_coleta" TEXT,
    "oxigenio_dissolvido" DOUBLE PRECISION NOT NULL,
    "ph" DOUBLE PRECISION NOT NULL,
    "amonia" DOUBLE PRECISION NOT NULL,
    "nitrito" DOUBLE PRECISION NOT NULL,
    "nitrato" DOUBLE PRECISION,
    "tds" DOUBLE PRECISION,
    "orp" DOUBLE PRECISION,
    "ec" DOUBLE PRECISION,
    "salppm" DOUBLE PRECISION,
    "sal" DOUBLE PRECISION,
    "sg" DOUBLE PRECISION,
    "temperatura" DOUBLE PRECISION NOT NULL,
    "transparencia_cm" INTEGER NOT NULL,
    "notas" TEXT,
    "responsavel_id" TEXT,

    CONSTRAINT "qualidade_agua_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "registros_saude" (
    "id" TEXT NOT NULL,
    "tanque_id" TEXT NOT NULL,
    "data_registro" TIMESTAMP(3) NOT NULL,
    "sintomas" TEXT,
    "percentual_afetado" DOUBLE PRECISION,
    "diagnostico" TEXT,
    "patologia_codigo" TEXT,
    "produto" TEXT,
    "dosagem" TEXT,
    "dias_tratamento" INTEGER,
    "dias_carencia" INTEGER,
    "resultado" TEXT,
    "data_diagnostico" TIMESTAMP(3),
    "usuario_id" TEXT,

    CONSTRAINT "registros_saude_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "produtos_estoque" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "categoria" TEXT,
    "tipo" TEXT NOT NULL,
    "unidade_medida" TEXT NOT NULL,
    "peso_por_unidade" DOUBLE PRECISION NOT NULL,
    "quantidade_unidades" INTEGER NOT NULL,
    "estoque_atual_kg" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "lote_numero" TEXT,
    "validade" TIMESTAMP(3),
    "fornecedor" TEXT,
    "custo_unitario" DOUBLE PRECISION,
    "data_ultima_entrada" TIMESTAMP(3),
    "data_ultima_saida" TIMESTAMP(3),

    CONSTRAINT "produtos_estoque_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "movimentacoes_tanque" (
    "id" TEXT NOT NULL,
    "tanque_id" TEXT NOT NULL,
    "tipo_movimentacao" "MovTanqueTipo" NOT NULL,
    "motivo" TEXT,
    "data" TIMESTAMP(3) NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "peso_medio_g" DOUBLE PRECISION NOT NULL,
    "notas" TEXT,
    "usuario_id" TEXT,

    CONSTRAINT "movimentacoes_tanque_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "movimentacoes_racao" (
    "id" TEXT NOT NULL,
    "produto_id" TEXT NOT NULL,
    "tipo_movimento" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "quantidade_kg" DOUBLE PRECISION NOT NULL,
    "lote_id" TEXT,
    "observacoes" TEXT,
    "responsavel_id" TEXT,

    CONSTRAINT "movimentacoes_racao_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "tanques_nome_key" ON "tanques"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "tanques_codigo_interno_key" ON "tanques"("codigo_interno");

-- CreateIndex
CREATE UNIQUE INDEX "tanques_ciclo_atual_id_key" ON "tanques"("ciclo_atual_id");

-- CreateIndex
CREATE UNIQUE INDEX "produtos_estoque_nome_key" ON "produtos_estoque"("nome");

-- AddForeignKey
ALTER TABLE "tanques" ADD CONSTRAINT "tanques_ciclo_atual_id_fkey" FOREIGN KEY ("ciclo_atual_id") REFERENCES "ciclos_producao"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ciclos_producao" ADD CONSTRAINT "ciclos_producao_tanque_id_fkey" FOREIGN KEY ("tanque_id") REFERENCES "tanques"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registros_diarios" ADD CONSTRAINT "registros_diarios_tanque_id_fkey" FOREIGN KEY ("tanque_id") REFERENCES "tanques"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registros_diarios" ADD CONSTRAINT "registros_diarios_responsavel_id_fkey" FOREIGN KEY ("responsavel_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "biometrias" ADD CONSTRAINT "biometrias_tanque_id_fkey" FOREIGN KEY ("tanque_id") REFERENCES "tanques"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "biometrias" ADD CONSTRAINT "biometrias_responsavel_id_fkey" FOREIGN KEY ("responsavel_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "qualidade_agua" ADD CONSTRAINT "qualidade_agua_tanque_id_fkey" FOREIGN KEY ("tanque_id") REFERENCES "tanques"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "qualidade_agua" ADD CONSTRAINT "qualidade_agua_responsavel_id_fkey" FOREIGN KEY ("responsavel_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registros_saude" ADD CONSTRAINT "registros_saude_tanque_id_fkey" FOREIGN KEY ("tanque_id") REFERENCES "tanques"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registros_saude" ADD CONSTRAINT "registros_saude_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movimentacoes_tanque" ADD CONSTRAINT "movimentacoes_tanque_tanque_id_fkey" FOREIGN KEY ("tanque_id") REFERENCES "tanques"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movimentacoes_tanque" ADD CONSTRAINT "movimentacoes_tanque_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movimentacoes_racao" ADD CONSTRAINT "movimentacoes_racao_produto_id_fkey" FOREIGN KEY ("produto_id") REFERENCES "produtos_estoque"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movimentacoes_racao" ADD CONSTRAINT "movimentacoes_racao_responsavel_id_fkey" FOREIGN KEY ("responsavel_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
