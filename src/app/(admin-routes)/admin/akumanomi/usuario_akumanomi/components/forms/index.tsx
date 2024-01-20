"use client"

import { FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

export function AdicionarUsuarioForm({ token }: { token: string }) {

    const [tripulacaoData, setTripulacaoData] = useState([]);
    const [personagemData, setPersonagemData] = useState([]);

    const [selectedOptionPersonagem, setSelectedOptionPersonagem] = useState('');
    const [selectedOptionAkumanomi, setSelectedOptionAkumanomi] = useState('');


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3333/select_akumanomi', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                });

                if (!response.ok) {
                    throw new Error(`Erro na resposta da API: ${response.status}`);
                }

                const data = await response.json();
                setTripulacaoData(data);

            } catch (error) {
                console.error('Erro ao obter dados da API:', error.message);
                setTripulacaoData([]);
            }
        };

        fetchData();
    }, []);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3333/select_personagem', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                });

                if (!response.ok) {
                    throw new Error(`Erro na resposta da API: ${response.status}`);
                }

                const data = await response.json();
                setPersonagemData(data);

            } catch (error) {
                console.error('Erro ao obter dados da API:', error.message);
                setPersonagemData([]);
            }
        };

        fetchData();
    }, []);

    async function handleRegister(event: FormEvent) {
        event.preventDefault();

        try {
            if (selectedOptionPersonagem === '' || selectedOptionAkumanomi === '') {
                toast.warn("Preencha todos os campos!");
                return;
            }

            const requestData = {
                personagem_id: selectedOptionPersonagem,
                akumanomi_id: selectedOptionAkumanomi,
            };

            const response = await fetch('http://localhost:3333/add_usuario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });

            if (!response.ok) {
                console.error('Error:', response.status, response.statusText);
                throw new Error(`Error in request: ${response.statusText}`);
            }

            
            toast.success('Cadastrado com sucesso!');
        } catch (err) {
            console.error(err);
            toast.error("Ops erro ao cadastrar!");
        }

        setSelectedOptionAkumanomi('');
        setSelectedOptionPersonagem('');
    }


    return (

        <form action="#" method="post" onSubmit={handleRegister}>

            <div className="mb-4 mt-8">

                <div className="mb-4">
                    <select
                        className="border rounded w-full py-2 px-3 bg-white border-blue-950"
                        value={selectedOptionPersonagem}
                        onChange={(e) => setSelectedOptionPersonagem(e.target.value)}
                    >
                        <option value="" disabled hidden>
                            Selecione usuário*
                        </option>
                        {personagemData.map((personagem) => (
                            <option key={personagem.id} value={personagem.id} >
                                {personagem.nome}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <select
                        className="border rounded w-full py-2 px-3 bg-white border-blue-950"
                        value={selectedOptionAkumanomi}
                        onChange={(e) => setSelectedOptionAkumanomi(e.target.value)}
                    >
                        <option value="" disabled hidden>
                            Selecione uma fruta*
                        </option>
                        {tripulacaoData.map((tripulacao) => (
                            <option key={tripulacao.id} value={tripulacao.id} >
                                {tripulacao.nome}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                        Cadastrar
                    </button>
                </div>

            </div>
        </form>
    );
}

