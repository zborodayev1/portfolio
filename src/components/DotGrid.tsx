export const DotGrid = () => {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(59,130,246,0.12) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
      }}
    />
  )
}
