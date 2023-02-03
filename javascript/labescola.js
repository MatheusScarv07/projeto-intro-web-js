const cursos = [
  {
      nome: "html e css",
      descricao:"",
      duracao:"1 mês",
      valor: 500
  },
  {
      nome: "javascript",
      descricao:"",
      duracao: "2 meses",
      valor: 900
  },
  {
      nome:"apis rest",
      descricao:"",
      duracao: "6 meses",
      valor: 2000
  }
];
const turmas = [
  {
      turma:"Hipatia",  
      curso: "javascript", 
      inicio: "30/11/2022" ,
      termino: "30/01/2022" ,
      numeroDeAlunos: 150,
      periodo: "Noturno",
      concluida: false


  },
  {
      turma:"Sibyla",
      curso: "JavaScript", 
      inicio: "30/10/2022",
      termino: "30/12/2022" ,
      numeroDeAlunos: 200,
      periodo: "Integral",
      concluida: false
  },
  {
      turma:"Curie",
      curso: "HTML e CSS", 
      inicio: "15/09/2022",
      termino: "15/10/2022" ,
      numeroDeAlunos: 180,
      periodo: "Noturno",
      concluida: true
  },
  {
      turma:"Zhenyi",
      curso: "HTML e CSS", 
      inicio: "01/11/2022" ,
      termino: "01/01/2023" ,
      numeroDeAlunos: 80,
      periodo: "integral",
      concluida: false
  },
  {
      turma:"Clarke",
      curso: "HTML e CSS", 
      inicio: "04/07/2022",
      termino: "04/09/2022",
      numeroDeAlunos: 200,
      periodo: "Noturno",
      concluida: true
  },
  {
      turma:"Blackwell",
      curso: "APIsRes", 
      inicio: "20/03/2022" ,
      termino:"20/06/2023" ,
      numeroDeAlunos: 100,
      periodo: "integral",
      concluida: true
  },
  {
      turma:"Elion",
      curso: "APIsRes", 
      inicio: "12/01/2022" ,
      termino: "12/06/2022" ,
      numeroDeAlunos: 200,
      periodo: "Noturno",
      concluida: true
  },
  {
      turma:"Burnell",
      curso: "APIsRes", 
      inicio: "18/10/2022" ,
      termino: "18/04/2023" ,
      numeroDeAlunos: 90,
      periodo: "integral",
      concluida: false
  }
  
];
const estudantes = [
  {
      estudante:  "Chris Evans",
      turma: "Hipátia",
      curso: "JavaScript",
      valor:  "900",
      nParcelas: 9,
      desconto:   false,
      parcelas: 100
  },
  {
      estudante:  "Halle Berry",
      turma: "Burnell",
      curso: "APIsRest",
      valor:  "2000",
      nParcelas: 4,
      desconto:   false,
      parcelas: 500
  },
  {
      estudante:  "Lashana Lynch",
      turma: "Zhenyi",
      curso: "HTML e CSS",
      valor:  "500",
      nParcelas: 1,
      desconto: true,
      parcelas: 500
  }
];
//Buscar turma 

const butaoBuscar  = document.getElementById("buscarBotao");
console.log(butaoBuscar)
butaoBuscar.addEventListener("click",function(){
  const buscarInput = document.getElementById("buscarInput").value;
  const resultado = turmas.filter(turma => turma.turma.includes(buscarInput))
  const containerResultado = document.getElementById("resultado")
  containerResultado.innerHTML = ""
  resultado.forEach(turma =>{
      const card = document.createElement("div")
      card.style.backgroundColor = "white"
      card.style.padding = "10px"
      card.style.margin = "10px"
      card.style.height ="200px"
      card.style.width ="180px"
      card.style.borderRadius = "10px"
      card.style.textAlign = "center"
      card.style.display ="flex"
      card.style.flexDirection = "column"
      card.style.justifyContent = "center"
      card.innerHTML = `
      <p>Turma: ${turma.turma}</p>
      <p>Curso: ${turma.curso}</p>
      <p>Inicio: ${turma.inicio}</p>
      <p>Termino: ${turma.termino}</p>
      <p>Numero de Alunos: ${turma.numeroDeAlunos}</p>
      <p>Periodo: ${turma.periodo}</p>
      <p>Concluida: ${turma.concluida}</p>`
      containerResultado.appendChild(card)
  })
})















//CODIGO QUE A JULIANA FEZ NA AULA SOBRE O PROJETO NA PARTE DE MATRICULAR E PARCELAR O CURSO



/* const matricular = (nome,curso,turma,numeroParcela) =>{

    let valorCurso = buscarCursos(curso)

    if(numeroParcela > 0 && numeroParcela <= 2 ){
      valorTotal = valorCurso.valor - (valorCurso.valor * 0.2)
      valorPorParcela = valorTotal / numeroParcela
    }else{
      valorTotal = valorCurso.valor
    }
      const novoAluno = {
        estudante:nome,
        turma:turma,
        curso:curso,
        valor:valorCurso.valor,
        nParcelas:numeroParcela,
        desconto:false,
        valorParcela:valorPorParcela
      }
  
      estudantes.push(novoAluno)
      console.log(estudantes)
      console.log(`Aluno matriculado \n Nome:${nome}\n Curso: ${curso}\n Turma: ${turma}`)
    
    }
    
    matricular('Matheus','JavaScript','Hipátia', 5) */