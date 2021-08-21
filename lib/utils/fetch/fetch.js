Fetch = function (_collection, _query, _options, wrapperFieldName = 'data') {
  const result = {
    options: {
      pagination: {},
      sorting: {}
    }
  };

  result[wrapperFieldName] = [];

  let query = _query;

  if(_options?.filtering) {
    const filterQuery = Object.keys(_options.filtering).reduce(function(obj, key) {
      obj[key] = {
        $regex: `${_options.filtering[key]}`,
        $options: 'i'
      };

      return obj;
    }, {});

    query = {...filterQuery, ...query };
  }

  const count = _collection.find(query).count();
  result.options.pagination.currentPage = 1;
  result.options.pagination.pageItems = count;
  result.options.pagination.totalCount = count;

  const options = {};

  if(_options?.pagination) {
    options.skip = (_options.pagination.currentPage - 1) * _options.pagination.pageItems;
    options.limit = _options.pagination.pageItems;
    result.options.pagination.currentPage = _options.pagination.currentPage;
    result.options.pagination.pageItems = _options.pagination.pageItems;
  }

  result.options.pagination.totalPages = Math.ceil(result.options.pagination.totalCount/result.options.pagination.pageItems);

  if(_options?.sorting) {
    options.sort = {};
    options.sort[_options.sorting.sortField] = _options.sorting.sortOrder === 'asc' ? 1 : -1;
    result.options.sorting = _options.sorting;
  }

  result[wrapperFieldName] = _collection.find(query, options).fetch();

  return result;
};

FetchByIndex = function (_collection, _query, _options, _index, wrapperFieldName = 'data') {
  const result = {
    options: {
      pagination: {},
      sorting: {}
    }
  };

  result[wrapperFieldName] = [];

  let query = _query;
  let cursor = null;
  let keyword = null;

  if(_options?.filtering) {
    keyword = _options.filtering.keyword;

    const filterQuery = Object.keys(_options.filtering).reduce(function(obj, key) {
      if(key === 'keyword') {
        return obj;
      }

      if(typeof _options.filtering[key] === 'object') {
        obj[key] = _options.filtering[key];
      } else {
        obj[key] = {
          $regex: `${_options.filtering[key]}`,
          $options: 'i'
        };
      }

      return obj;
    }, {});

    query = {...filterQuery, ...query };
  }

  const options = {
    props: {}
  };

  if(keyword && _index) {
    options.props.query = query;

    cursor = _index.search(keyword, options);
  } else {
    cursor = _collection.find(query);
  }

  const count = cursor.count();
  result.options.pagination.currentPage = 1;
  result.options.pagination.pageItems = count;
  result.options.pagination.totalCount = count;

  if(_options?.pagination) {
    options.skip = (_options.pagination.currentPage - 1) * _options.pagination.pageItems;
    options.limit = _options.pagination.pageItems;
    const totalPages = Math.ceil(result.options.pagination.totalCount / _options.pagination.pageItems)
    result.options.pagination.currentPage = _options.pagination.currentPage > totalPages ?  1 : _options.pagination.currentPage;
    result.options.pagination.pageItems = _options.pagination.pageItems;
  }

  result.options.pagination.totalPages = Math.ceil(result.options.pagination.totalCount/result.options.pagination.pageItems);

  if(_options?.sorting) {
    options.sort = {};
    options.sort[_options.sorting.sortField] = _options.sorting.sortOrder === 'asc' ? 1 : -1;
    result.options.sorting = _options.sorting;
  }

  if(keyword && _index) {
    options.props.query = query;

    if(options.sort) {
      options.props.sort = options.sort;
      delete options.sort;
    }
    
    result[wrapperFieldName] = _index.search(keyword, options).fetch();
  } else {
    result[wrapperFieldName] = _collection.find(query, options).fetch();
  }

  return result;
}