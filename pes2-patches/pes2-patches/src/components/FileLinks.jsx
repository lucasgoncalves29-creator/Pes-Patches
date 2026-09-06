import styles from './FileLinks.module.css';

const TYPE_ICON = {
  patch: '💾',
  'option-file': '📋',
  update: '🔄',
  tutorial: '🎬'
};

const TYPE_CTA = {
  patch: 'Acessar arquivo',
  'option-file': 'Acessar arquivo',
  update: 'Acessar arquivo',
  tutorial: 'Ver tutorial'
};

export default function FileLinks({ links }) {
  const validLinks = (links || []).filter((l) => l.label);

  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>Arquivos e links</h2>
      <p className={styles.notice}>
        O PES2 Patches não hospeda arquivos. Os botões abaixo direcionam a fontes externas cadastradas e
        autorizadas pelo administrador do catálogo.
      </p>

      <div className={styles.list}>
        {validLinks.map((link, idx) => {
          const hasUrl = Boolean(link.url && link.url.trim());
          return (
            <div className={styles.item} key={idx}>
              <div className={styles.itemInfo}>
                <span className={styles.icon} aria-hidden="true">
                  {TYPE_ICON[link.type] || '🔗'}
                </span>
                <span className={styles.label}>{link.label}</span>
              </div>
              {hasUrl ? (
                <a href={link.url} target="_blank" rel="noopener noreferrer" className={styles.cta}>
                  {TYPE_CTA[link.type] || 'Acessar'}
                </a>
              ) : (
                <span className={styles.pending}>Link ainda não cadastrado</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
