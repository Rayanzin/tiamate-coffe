import { Form, Select, Input, Button } from 'antd';
import { useEffect, useState } from 'react';
const Franquia = () => {
    const [telefone, setTelefone] = useState('');

    // Função para formatar o telefone
    const formatarTelefone = (value) => {
        let telefone = value.replace(/\D/g, ''); // Remove tudo que não for número

        if (telefone.length <= 10) {
            telefone = telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3'); // Formato (XX) XXXXX-XXXX
        } else if (telefone.length === 11) {
            telefone = telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3'); // Formato (XX) XXXXX-XXXX
        }

        return telefone;
    };

    // Função para lidar com mudanças no input de telefone
    const handleTelefoneChange = (e) => {
        const formattedTelefone = formatarTelefone(e.target.value);
        setTelefone(formattedTelefone);
    };

    const [estados, setEstados] = useState([])

    const url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
    useEffect(() => {
        fetch(url)
            .then(res => res.json()) // Converte a resposta para JSON
            .then(data => {
                setEstados(data); // Armazena os estados no estado
            })
    }, []);
    return (
        <section id="Franquia" className="flex justify-center bg-letras2 pl-[69px] h-[700px]">
            <div className="p-[69px] flex flex-col justify-center">
                <div className="w-[468px] *:text-letras3 mb-[20px]">
                    <p className="text-[18px]">Entre em contato</p>
                    <h2 className="text-[50px] !text-letras">Abra sua Franquia</h2>
                    <p className="text-[16px]">Preencha o formulário abaixo que entraremos em contato com você o mais rápido possível.</p>
                </div>
                <Form>
                    <Form.Item className='*:*:*:*:flex *:*:*:*:flex-col *:*:*:*:w-[570px]  *:*:*:*:gap-[10px] '>
                        <Input type='text' minLength={6} className=' text-[16px] bg-letras py-[18px] hover:border-letras focus:border-letras' placeholder='Nome e Sobrenome' required />
                        <Input type='email' pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" className='text-[16px] bg-letras py-[18px] hover:border-letras focus:border-letras' placeholder='email@exemplo.com' required />
                        <Input value={telefone}
                            onChange={handleTelefoneChange}
                            maxLength={15} // Limitar a 15 caracteres após a formatação
                            className='text-[16px] bg-letras py-[18px] hover:border-letras focus:border-letras'
                            placeholder='Telefone com DDD'
                            required />
                        <div className='flex gap-[10px]'>
                            <Select className='text-[16px] *:*:bg-letras *:*:rounded *:*:h-[62px] *:*:pl-[10px] *:*:w-[35px] *:*:mx-[-10px] h-[64px] *:*:*:*:focus:border-letras' placeholder="UF" required>
                                {estados.map(estado => (
                                    <Select.Option key={estado.id} value={estado.sigla}>
                                        {estado.sigla}
                                    </Select.Option>
                                ))}
                            </Select>
                            <Input className='text-[16px] bg-letras py-[18px] hover:border-letras focus:border-letras' placeholder='Cidade' required />
                        </div>
                        <Select className='text-[16px] *:*:bg-letras *:*:rounded *:*:h-[58px] *:*:pl-[10px] *:*:w-[35px] *:*:mx-[-10px] h-[60px]' placeholder="Como conheceu a Tiamate?">
                            <Select.Option value="internet">Internet</Select.Option>
                            <Select.Option value="Amigos">Amigos</Select.Option>
                            <Select.Option value="Familiares">Familiares</Select.Option>
                            <Select.Option value="Recomendação">Recomendação</Select.Option>
                            <Select.Option value="Outros">Outros</Select.Option>
                        </Select>
                        <Button type='primary' htmlType="submit" className=' bg-quaternaria border-quaternaria h-[60px] text-letras2 hover:!bg-bghover hover:!text-letras'>Enviar Cadastro</Button>
                    </Form.Item>
                </Form>
            </div>
            <div className="w-[667px] h-[100%]">
                <img className='object-cover w-[100%] h-[100%]' src="./src/imgs/fundo.jpg" alt="fundo" />
            </div>
        </section>
    );
}

export default Franquia;