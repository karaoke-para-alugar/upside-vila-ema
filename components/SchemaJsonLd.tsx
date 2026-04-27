// components/SchemaJsonLd.tsx — Componente para injeção segura de JSON-LD no <head>
// Regra da skill schema-markup: Schema SOMENTE reflete conteúdo visível na página.

interface SchemaJsonLdProps {
  schema: Record<string, unknown> | Record<string, unknown>[] | null;
}

/**
 * Injeta um ou mais blocos de JSON-LD no <head> da página.
 * Aceita schema único ou array de schemas.
 *
 * Uso:
 *   <SchemaJsonLd schema={generateLocalBusinessSchema()} />
 *   <SchemaJsonLd schema={[schema1, schema2]} />
 *
 * Se o schema for `null`, não renderiza nada (evita schema invisível).
 */
export function SchemaJsonLd({ schema }: SchemaJsonLdProps) {
  if (!schema) return null;

  const schemas = Array.isArray(schema) ? schema : [schema];

  return (
    <>
      {schemas.map((s, i) => (
        <script
          key={`schema-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
}
