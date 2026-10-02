import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="cabecalho-principal">
      <div className="conteiner conteiner-cabecalho">
        <h1 className="logotipo">ForgeRaven <span>3D</span></h1>
        <Navigation />
      </div>
    </header>
  );
}