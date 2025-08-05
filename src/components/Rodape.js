import React from "react";

export default function Rodape() {
  return (
    <footer>
      <div className="pager-inner-content">
        <div className="download-options">
          <p>Está com dúvida? Entre em contato com Suporte</p>
          {/* Link para o WhatsApp */}
        <a
          href="https://api.whatsapp.com/send?phone=4491799901&text=Preciso%20de%20suporte"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/whatsapp.png" alt="WhatsApp" />
        </a>  
          <p>Nos siga no Instagram e fique por dentro das novidades</p>
                   {/* Link para o Instagram */}
        <a
          href="https://www.instagram.com/requinteodonto/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/Instagram.png" alt="Instagram" />
        </a>
        </div>

        <div>
          <div className="logo-footer">
          <h1 className="logo1">
           <span>REQUINTE SOLUÇÕES ODONTOLÓGICAS LTDA</span>
            </h1>
            <p>
            Agradecemos pela confiança em nossa distribuidora, a REQUINTE SOLUÇÕES ODONTOLÓGICAS LTDA - Materiais Odontológicos.
            É uma honra fazer parte da sua jornada, fornecendo produtos de qualidade que contribuem para o sucesso do seu trabalho e para a saúde e bem-estar dos pacientes que confiam nos melhores tratamentos.
            Com um compromisso contínuo com a excelência, segurança e inovação, estamos sempre prontos para atender às suas necessidades e oferecer suporte especializado.
            Conte conosco como seu parceiro de confiança, garantindo materiais odontológicos de alta qualidade e um atendimento dedicado.
            Obrigado por fazer parte da nossa história!
            </p>
            </div>
            <hr/>
            <p className="copyright">
             Copyright 2030 - REQUINTE SOLUÇÕES ODONTOLÓGICAS LTDA - Todos Direitos Reservados 
            </p>
        </div>
      </div>
    </footer>
  );
}