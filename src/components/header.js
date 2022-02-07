function Header(){
    return(
        <div className="header">

            <div id="barra">
                <div id="logo">
                    Pexels
                </div>
                <div id="opcoes">
                    <div id="listaOpcoes">
                        <button class="btn">Explorar</button>
                        <button class="btn">Licença</button>
                        <button class="btn">Fazer Upload</button>
                        <button class="btn">. . .</button>
                        <button id="btnCadastro">Cadastre-se</button>    
                    </div>    
                </div>
            </div>

            <div id="conteudo">
                <div id="caixaTextoPrincipal">
                    <p id="textoPrincipal">As melhores fotos profissionais gratuitas e imagens e vídeos livres de royalties que os criadores compartilharam.</p>
                </div>
                
            </div>

            <div id="caixaInput">
            <input placeholder="Buscar fotos e vídeos gratuitos" id="input"></input>
            </div>
        </div>
    )
}
export default Header;