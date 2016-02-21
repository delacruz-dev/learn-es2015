import UseCase from '../useCase';

/**
 * @implements UseCase
 * */
export default class PokemonListUseCase extends UseCase {

  constructor({repository} = {}) {
    super(repository);

    this.repository = repository;
  }

  execute({query = ''} = {}) {
    if (query === '') {
      throw new Error('PokemonListUseCase#execute query must be a string');
    }
    return this.repository.list({query});
  }
}
