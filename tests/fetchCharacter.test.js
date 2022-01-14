require('../mocks/fetchSimulator');
const { fetchCharacter } = require('../src/fetchCharacter');

describe('Validando a função fetchCharacter', () => {
  it('Verifica se o nome do personagem é `Wonder Woman`', async () => {
    const character = await fetchCharacter('720');
    expect(character.name).toBe('Wonder Woman');
    //expect(character.name).toBe('Spider Man');  // teste para verificar falso-positivo
    //console.log(character.name);
  });

  it('Verifica se retorna erro ao executar a função sem parâmetro', async () => {
    const failRequest = await fetchCharacter();
    //console.log(failRequest);
    expect(failRequest).toEqual(new Error('You must provide an url'));
  });

  it('Verifica se retorna \'Invalid id\' ao executar a função com parâmetro que não existe', async () => {
    const invalidParameter = await fetchCharacter('outro parametro');
    expect(invalidParameter).toBe('Invalid id')
  });

  it('Verifica se fetch é chamada com o endpoint correto', async () => {
    const url = 'https://www.superheroapi.com/api.php/4192484924171229/720';
    await fetchCharacter('720');
    expect(fetch).toHaveBeenCalledTimes(4);
    expect(fetch).toHaveBeenCalledWith(url);
  });
});