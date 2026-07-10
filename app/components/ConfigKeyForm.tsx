'use client';

import { useState } from 'react';

interface ConfigKeyFormProps {
  keyName: string;
  keyLabel: string;
  placeholder?: string;
  description?: string;
}

export default function ConfigKeyForm({
  keyName,
  keyLabel,
  placeholder = '••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••',
  description,
}: ConfigKeyFormProps) {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSave = async () => {
    if (!value.trim()) {
      setError('Por favor, informe a chave');
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch('/api/config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          key: keyName,
          value: value.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Erro ao salvar no servidor');
        // Fallback: guardar localmente
        localStorage.setItem(`config_${keyName}`, value);
        setError(`Erro ao salvar no servidor — salvo apenas no navegador. ${data.error}`);
        return;
      }

      // Sucesso
      setSuccess(`✓ Salva no servidor: ${data.data.key}...${value.slice(-4)}`);
      localStorage.removeItem(`config_${keyName}`); // Remover backup local
      setValue(''); // Limpar campo
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Erro de rede desconhecido';
      setError(`Erro ao salvar no servidor — ${msg}`);
      // Fallback: guardar localmente
      localStorage.setItem(`config_${keyName}`, value);
    } finally {
      setLoading(false);
    }
  };

  const handleTest = async () => {
    if (!value.trim()) {
      setError('Por favor, informe a chave antes de testar');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      // Teste simples: validar formato da chave
      if (keyName === 'ANTHROPIC_API_KEY' && !value.startsWith('sk-ant-')) {
        setError('❌ Chave Anthropic inválida. Deve começar com sk-ant-');
        return;
      }

      setSuccess('✅ Formato da chave válido');
    } catch (err) {
      setError('❌ Erro ao testar chave');
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setValue('');
    setError(null);
    setSuccess(null);
  };

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 space-y-4">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {keyLabel}
        </label>
        <input
          type="password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg font-mono text-sm placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          disabled={loading}
        />
        {description && (
          <p className="text-xs text-gray-600 mt-2">{description}</p>
        )}
      </div>

      {/* Status Messages */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded p-3 flex items-center gap-3">
          <span className="text-red-600 font-semibold text-sm">✗ {error}</span>
        </div>
      )}

      {success && (
        <div className="bg-green-50 border border-green-200 rounded p-3 flex items-center gap-3">
          <span className="text-green-700 font-semibold text-sm">{success}</span>
        </div>
      )}

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          onClick={handleSave}
          disabled={loading}
          className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 rounded-lg transition-colors"
        >
          {loading ? 'Salvando...' : 'Salvar chave'}
        </button>

        <button
          onClick={handleTest}
          disabled={loading}
          className="flex-1 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-400 text-gray-800 font-semibold py-3 rounded-lg transition-colors"
        >
          {loading ? 'Testando...' : 'Testar conexão'}
        </button>

        <button
          onClick={handleClear}
          disabled={loading}
          className="flex-1 bg-gray-100 hover:bg-gray-200 disabled:bg-gray-400 text-gray-700 font-semibold py-3 rounded-lg transition-colors"
        >
          Limpar chave
        </button>
      </div>
    </div>
  );
}
