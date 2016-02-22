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
    return this.repository.list({query});
  }
}
