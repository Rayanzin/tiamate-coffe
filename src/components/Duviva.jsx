import RedesSociais from "./RedesSociais";
import { Button } from 'antd';


const Duvida = () => {
    return (
        <section className="w-full py-[213px]">
            <section className="w-[1170px] m-auto">
                <div className="mb-[18px]">
                    <h2 className="text-[50px] font-bold text-primaria">Alguma dúvida?</h2>
                    <p className="text-[18px] font-normal text-letras2">Deixe sua mensagem</p>
                </div>
                <div className="flex justify-between">
                    <form className="w-[570px] flex flex-col gap-[10px]">
                        <div className="relative">
                            <input className="p-[21px] pl-[50px] w-full bg-bgcard rounded-md text-[16px] leading-[120%] font-normal" type="text" placeholder="Nome e Sobrenome" required />
                            <svg className="absolute translate-y-[-50%] left-[10px] top-[50%]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="16" cy="16" r="16" fill="#969696" />

                            </svg>
                            <svg className="absolute top-[50%] left-[17px] translate-y-[-50%]" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.9214 15.5595C16.8453 14.3871 17.4879 12.9973 17.7948 11.5076C18.1017 10.018 18.0639 8.47223 17.6846 7.00121C17.3053 5.5302 16.5956 4.17717 15.6156 3.05659C14.6357 1.93602 13.4142 1.08086 12.0546 0.563454C10.695 0.0460506 9.23729 -0.118374 7.80469 0.0840906C6.3721 0.286555 5.00682 0.849951 3.82434 1.72662C2.64186 2.60329 1.67696 3.76744 1.01129 5.12059C0.345614 6.47374 -0.00126257 7.97608 3.4531e-06 9.50052C0.000489269 11.7166 0.74094 13.8618 2.09143 15.5595L2.07856 15.5711C2.12359 15.6281 2.17506 15.6769 2.22138 15.7332C2.27927 15.8031 2.34168 15.8689 2.4015 15.9368C2.58163 16.143 2.76691 16.3412 2.96119 16.5271C3.02038 16.5841 3.08149 16.637 3.14132 16.6913C3.34718 16.8785 3.55883 17.0563 3.7782 17.2218C3.80651 17.2422 3.83224 17.2687 3.86055 17.2897V17.2816C5.36726 18.3998 7.16469 19 9.00708 19C10.8495 19 12.6469 18.3998 14.1536 17.2816V17.2897C14.1819 17.2687 14.207 17.2422 14.236 17.2218C14.4547 17.0556 14.667 16.8785 14.8728 16.6913C14.9327 16.637 14.9938 16.5834 15.053 16.5271C15.2473 16.3405 15.4325 16.143 15.6127 15.9368C15.6725 15.8689 15.7342 15.8031 15.7928 15.7332C15.8385 15.6769 15.8906 15.628 15.9356 15.5704L15.9214 15.5595ZM9.00644 4.07253C9.579 4.07253 10.1387 4.2516 10.6148 4.58709C11.0908 4.92259 11.4619 5.39944 11.681 5.95735C11.9001 6.51525 11.9574 7.12916 11.8457 7.72143C11.734 8.31371 11.4583 8.85774 11.0535 9.28475C10.6486 9.71175 10.1328 10.0025 9.57121 10.1204C9.00965 10.2382 8.42758 10.1777 7.8986 9.94661C7.36962 9.71551 6.91749 9.32417 6.59939 8.82207C6.2813 8.31996 6.11151 7.72965 6.11151 7.12577C6.11151 6.316 6.41651 5.5394 6.95942 4.9668C7.50232 4.39421 8.23866 4.07253 9.00644 4.07253ZM3.86441 15.5595C3.87557 14.6686 4.21884 13.8182 4.81996 13.1922C5.42108 12.5662 6.23172 12.215 7.07649 12.2145H10.9364C11.7812 12.215 12.5918 12.5662 13.1929 13.1922C13.794 13.8182 14.1373 14.6686 14.1485 15.5595C12.7376 16.9005 10.9057 17.6426 9.00644 17.6426C7.1072 17.6426 5.2753 16.9005 3.86441 15.5595Z" fill="#292625" />
                            </svg>
                        </div>
                        <div className="relative">
                            <input className="p-[21px] pl-[50px] w-full bg-bgcard rounded-md text-[16px] leading-[120%] font-normal" type="email" placeholder="email@exemplo.com" required />
                            <svg className="absolute translate-y-[-50%] left-[10px] top-[50%]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="16" cy="16" r="16" fill="#969696" />
                            </svg>
                            <svg className="absolute top-[50%] left-[17px] translate-y-[-50%]" width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.13202 7.61395L17.8805 0.00425296C17.8663 0.00283525 17.8524 0 17.8382 0H0.4261C0.411618 0 0.397704 0.00283525 0.383789 0.00425296L9.13202 7.61395Z" fill="#292625" />
                                <path d="M12.2522 6.02763L18.2635 12.0271V0.798828L12.2522 6.02763Z" fill="#292625" />
                                <path d="M11.6084 6.58789L9.4116 8.49896C9.40848 8.50151 9.40507 8.50237 9.40195 8.50492C9.36645 8.53412 9.32812 8.55709 9.28694 8.57297C9.27956 8.57609 9.27161 8.57807 9.26394 8.58034C9.22134 8.59423 9.17704 8.60331 9.13246 8.60359H9.13218H9.13189C9.08731 8.60331 9.04301 8.59423 9.00042 8.58034C8.99275 8.57779 8.98508 8.5758 8.97742 8.57297C8.93596 8.55681 8.89762 8.53384 8.86241 8.50492C8.85928 8.50237 8.85559 8.50151 8.85275 8.49896L6.65569 6.58789L0.308411 12.9217C0.345895 12.9324 0.384798 12.9398 0.42569 12.9398H17.8375C17.8787 12.9398 17.917 12.9321 17.9548 12.9217L11.6084 6.58789Z" fill="#292625" />
                                <path d="M0 0.798828V12.0271L6.01106 6.02763L0 0.798828Z" fill="#292625" />
                            </svg>

                        </div>
                        <textarea className="p-[21px] w-full h-[240px] bg-bgcard rounded-md text-[16px] leading-[120%] font-normal" placeholder="Mensagem" required></textarea>
                        <Button type='primary' htmlType="submit" className=' bg-letras3 border-quaternaria h-[60px] text-letras2 hover:!bg-bghover hover:!text-letras'>Enviar Cadastro</Button>
                    </form>
                    <div className="flex flex-col gap-[28px]">
                        <RedesSociais
                            classUl="gap-[52px]"
                            className="w-[60px] h-[60px] *:!fill-primaria" />
                        <h2 className="text-[50px] font-bold text-letras2 leading-none">
                            Curta e <br />
                            Compartilhe
                        </h2>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Duvida;