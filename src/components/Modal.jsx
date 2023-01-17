import { useState } from 'react';
import CerrarBtn from '../assets/img/cerrar.svg';

const Modal = ({setModal, animarModal, setAnimarModal}) => {

    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [categoria, setCategoria] = useState('');

    const ocultarModal = () => {
        setAnimarModal(false);

        setTimeout(() => {
            setModal(false);
        }, 500)
    }

  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img 
                src={CerrarBtn} 
                alt="Botão de fechar" 
                onClick={ocultarModal}
            />
        </div>
        
        <form className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
            <legend>Novo Gasto</legend>

            <div className="campo">
                <label htmlFor="nombre">Nome do Gasto</label>
                <input 
                    id="nombre"
                    type="text"
                    placeholder='Adicione o Gasto'
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label htmlFor="cantidad">Valor Gasto</label>
                <input 
                    id="cantidad"
                    type="number"
                    placeholder='Adicione a Quantidade'
                    value={cantidad}
                    onChange={e => setCantidad(Number(e.target.value))}

                />
            </div>
            <div className="campo">
                <label htmlFor="categoria">Categoria</label>
                <select id="categoria" value={categoria} onChange={e => setCategoria(e.target.value)}>
                    <option value="">--Selecionar--</option>
                    <option value="ahorro">Poupança</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="gastos">Gastos diversos</option>
                    <option value="ocio">Lazer</option>
                    <option value="salud">Saúde</option>
                    <option value="suscripciones">Assinaturas</option>
                </select>
            </div>
            <input type="submit" value='Inserir Gasto'/>

        </form>
        
    </div>
  )
}

export default Modal