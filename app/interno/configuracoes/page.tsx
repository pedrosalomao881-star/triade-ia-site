import ConfigKeyForm from '@/app/components/ConfigKeyForm';

export const metadata = {
  title: 'Configurações',
  description: 'Gerenciar chaves de API e configurações do sistema SOAF',
};

export default function ConfiguracoesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-navy text-white py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Configurações</h1>
          <p className="text-gray-300">Gerenciar chaves de API e credenciais do sistema</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-8">
          {/* Info Banner */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3">
            <span className="text-yellow-600 text-xl">ℹ️</span>
            <div>
              <p className="text-sm font-semibold text-yellow-900">
                A chave é salva no arquivo `data/soaf-config.json` no servidor — persiste entre reinicializações.
              </p>
              <p className="text-xs text-yellow-700 mt-1">
                Para produção, prefira ANTHROPIC_API_KEY no `.env.local`
              </p>
            </div>
          </div>

          {/* Anthropic API Key */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Chave API Anthropic</h2>
            <ConfigKeyForm
              keyName="ANTHROPIC_API_KEY"
              keyLabel="Chave SK (Anthropic)"
              placeholder="••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••"
              description="Obtenha em https://console.anthropic.com/account/keys. Comece com sk-ant-"
            />
          </div>

          {/* Status do Sistema */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Status do Sistema</h2>
            <div className="space-y-3">
              <SystemStatus
                label="Base Normativa"
                value="23 normativas · v3.0 · CGIBS 6/2026 + NTs NF-e/NFS-e"
                status="ativo"
              />
              <SystemStatus
                label="Squad de Agentes"
                value="7 agentes · 10 skills · claude-sonnet-4-6"
                status="ativo"
              />
              <SystemStatus
                label="API Anthropic"
                value="Chave configurada (servidor)"
                status="ativo"
              />
            </div>
          </div>

          {/* Dados SEFIN */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Dados SEFIN</h2>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <p className="text-sm text-gray-600 mb-3">
                Configuração de datasource para análise de créditos tributários
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Endpoint:</span>
                  <span className="text-gray-600 font-mono">e-cac.receita.federal.gov.br</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Status:</span>
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                    ✓ Ativo
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Documentos */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Documentos</h2>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <p className="text-sm text-gray-600 mb-3">
                Base de normativas e jurisprudência para análise
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">
                  📋 23 normativas | 🏛️ STJ | 📄 EC 132/2023
                </span>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                  0 atualiz.
                </span>
              </div>
            </div>
          </div>

          {/* Footer Info */}
          <div className="text-center text-sm text-gray-600 pt-4 border-t border-gray-200">
            <p>Última sincronização: 2026-07-10 16:11:18</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SystemStatus({
  label,
  value,
  status,
}: {
  label: string;
  value: string;
  status: 'ativo' | 'inativo';
}) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
      <div className="flex-1">
        <p className="text-sm font-semibold text-gray-900">{label}</p>
        <p className="text-xs text-gray-600 mt-1">{value}</p>
      </div>
      <span
        className={`inline-block w-3 h-3 rounded-full ${
          status === 'ativo' ? 'bg-green-500' : 'bg-red-500'
        }`}
      />
      <span className={`text-xs font-semibold ml-2 ${
        status === 'ativo' ? 'text-green-700' : 'text-red-700'
      }`}>
        {status === 'ativo' ? 'ATIVO' : 'INATIVO'}
      </span>
    </div>
  );
}
