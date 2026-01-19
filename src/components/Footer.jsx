import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import data from '../data/data.json';

/**
 * Componente Footer - Rodapé com informações da panificadora
 */
const Footer = () => {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="bg-brand-cocoa text-text-inverse">
      {/* Seção Principal do Footer */}
      <div className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">

            {/* Coluna 1: Sobre a Panificadora */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4">
                <h3 className="mb-2 font-serif text-2xl text-accent-butter">
                  {data.nomePanificadora}
                </h3>
                <div className="w-16 h-1 rounded-full bg-accent-butter"></div>
              </div>
              <p className="leading-relaxed text-text-inverse/80">
                Produtos fresquinhos feitos com carinho todos os dias.
                Tradição e qualidade que você já conhece e confia.
              </p>
              <div className="mt-4 text-4xl" role="img" aria-label="pão">
                🥖
              </div>
            </motion.div>

            {/* Coluna 2: Horários */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="flex items-center gap-2 mb-4 text-lg font-semibold text-accent-butter">
                <Clock className="w-5 h-5" aria-hidden="true" />
                Horários de Atendimento
              </h4>
              <div className="space-y-2 text-text-inverse/80">
                <div>
                  <p className="font-medium text-text-inverse">Segunda a Sexta</p>
                  <p>{data.horarios.segunda_sexta}</p>
                </div>
                <div>
                  <p className="font-medium text-text-inverse">Sábado</p>
                  <p>{data.horarios.sabado}</p>
                </div>
                <div>
                  <p className="font-medium text-text-inverse">Domingo</p>
                  <p>{data.horarios.domingo}</p>
                </div>
              </div>
            </motion.div>

            {/* Coluna 3: Contato */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="flex items-center gap-2 mb-4 text-lg font-semibold text-accent-butter">
                <Phone className="w-5 h-5" aria-hidden="true" />
                Contato
              </h4>
              <div className="space-y-3 text-text-inverse/80">
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 mt-0.5" aria-hidden="true" />
                  <div>
                    <p>Supermercado Local</p>
                    <p className="text-sm">Corupá, SC</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  <a
                    href={`https://wa.me/${data.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-accent-butter"
                  >
                    (48) 99999-9999
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                  <a
                    href="mailto:panificadora@supermercado.com.br"
                    className="transition-colors hover:text-accent-butter"
                  >
                    contato@panificadora.com.br
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Coluna 4: Links e Redes Sociais */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="mb-4 text-lg font-semibold text-accent-butter">
                Siga-nos
              </h4>
              <div className="flex gap-4 mb-6">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 transition-all duration-200 rounded-full bg-text-inverse/10 hover:bg-accent-butter group"
                  aria-label="Instagram"
                >
                  <Instagram
                    className="w-5 h-5 text-text-inverse group-hover:text-brand-chocolate"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 transition-all duration-200 rounded-full bg-text-inverse/10 hover:bg-accent-butter group"
                  aria-label="Facebook"
                >
                  <Facebook
                    className="w-5 h-5 text-text-inverse group-hover:text-brand-chocolate"
                    aria-hidden="true"
                  />
                </a>
              </div>

              <div className="space-y-2 text-text-inverse/80">
                <h5 className="mb-2 font-medium text-text-inverse">Links Úteis</h5>
                <a
                  href="#produtos"
                  className="block transition-colors hover:text-accent-butter"
                >
                  Produtos
                </a>
                <a
                  href="#resumo-pedido"
                  className="block transition-colors hover:text-accent-butter"
                >
                  Fazer Pedido
                </a>
                <a
                  href="#"
                  className="block transition-colors hover:text-accent-butter"
                >
                  Política de Pedidos
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Seção de Copyright */}
      <div className="border-t border-text-inverse/20">
        <div className="py-6 container-custom">
          <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row text-text-inverse/60">
            <p>
              © {anoAtual} {data.nomePanificadora}. Todos os direitos reservados.
            </p>
            <p>
              Feito com <span className="text-red-400">❤️</span> para nossa comunidade
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
