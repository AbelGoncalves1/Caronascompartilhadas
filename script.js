$(document).ready(function() {
  var isSubmitting = false;

  $('#passageiro-form').submit(function(e) {
      e.preventDefault();

      if (isSubmitting) return;
      isSubmitting = true;

      var nome = $('#nome').val();
      var cpf = $('#cpf').val();
      var email = $('#email').val();
      var telefone = $('#telefone').val();

      $.ajax({
          url: 'backend.php',
          type: 'POST',
          data: {
              action: 'create_passageiro',
              nome: nome,
              cpf: cpf,
              email: email,
              telefone: telefone
          },
          success: function(response) {
              alert('Passageiro cadastrado com sucesso!');
              $('#passageiro-form')[0].reset();
              isSubmitting = false;
          },
          error: function(error) {
              console.error("Erro ao enviar requisição:", error);
              alert('Erro ao cadastrar passageiro.');
              isSubmitting = false;
          }
      });
  });

  $('#motorista-form').submit(function(e) {
      e.preventDefault();

      if (isSubmitting) return;
      isSubmitting = true;

      var nome = $('#nome').val();
      var cpf = $('#cpf').val();
      var veiculo = $('#veiculo').val();
      var placa = $('#placa').val();

      $.ajax({
          url: 'backend.php',
          type: 'POST',
          data: {
              action: 'create_motorista',
              nome: nome,
              cpf: cpf,
              veiculo: veiculo,
              placa: placa
          },
          success: function(response) {
              alert('Motorista cadastrado com sucesso!');
              $('#motorista-form')[0].reset();
              isSubmitting = false;
          },
          error: function(error) {
              console.error("Erro ao enviar requisição:", error);
              alert('Erro ao cadastrar motorista.');
              isSubmitting = false;
          }
      });
  });

  function loadViagens() {
      $.ajax({
          url: 'backend.php',
          type: 'POST',
          data: {
              action: 'get_viagens'
          },
          success: function(response) {
              console.log("Dados recebidos:", response);
              var viagens = JSON.parse(response);
              var viagensList = $('#viagens-list');
              viagensList.empty();

              viagens.forEach(function(viagem) {
                  var row = '<tr>' +
                      '<td>' + viagem.id + '</td>' +
                      '<td>' + viagem.origem + '</td>' +
                      '<td>' + viagem.destino + '</td>' +
                      '<td>' + viagem.data_viagem + '</td>' +
                      '<td>' + viagem.passageiros + '</td>' +
                      '<td>' +
                      '<button class="btn btn-primary btn-edit" data-id="' + viagem.id + '">Editar</button> ' +
                      '<button class="btn btn-danger btn-delete" data-id="' + viagem.id + '">Excluir</button>' +
                      '</td>' +
                      '</tr>';
                  viagensList.append(row);
              });

              $('.btn-delete').click(function() {
                  var id = $(this).data('id');
                  deleteViagem(id);
              });

              $('.btn-edit').click(function() {
                  var id = $(this).data('id');
                  editViagem(id);
              });
          },
          error: function(error) {
              console.error("Erro ao carregar viagens:", error);
          }
      });
  }

  function deleteViagem(id) {
      $.ajax({
          url: 'backend.php',
          type: 'POST',
          data: {
              action: 'delete_viagem',
              id: id
          },
          success: function(response) {
              alert('Viagem excluída com sucesso!');
              loadViagens();
          },
          error: function(error) {
              console.error("Erro ao excluir viagem:", error);
          }
      });
  }

  function editViagem(id) {
      // Implementar lógica para editar viagem aqui
      // Você pode abrir um modal para edição ou usar campos de entrada na própria linha da tabela
      alert('Editar viagem ID: ' + id);
  }

  loadViagens();
});
