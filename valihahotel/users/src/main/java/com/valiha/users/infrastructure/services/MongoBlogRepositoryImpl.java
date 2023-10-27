package com.valiha.users.infrastructure.services;

import com.valiha.users.application.repository.GenericRepository;
import com.valiha.users.application.repository.UserRepository;
import com.valiha.users.core.entities.model.Blog;
import com.valiha.users.core.entities.model.User;
import com.valiha.users.infrastructure.config.UserData;
import com.valiha.users.infrastructure.data.BlogDataMapper;
import com.valiha.users.infrastructure.data.UserDataMapper;
import com.valiha.users.infrastructure.repository.MongoBlogRepository;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class MongoBlogRepositoryImpl implements GenericRepository<Blog> {

  private final MongoBlogRepository blogRepository;
  private final UserRepository userRepository;

  public MongoBlogRepositoryImpl(
    MongoBlogRepository blogRepository,
    UserRepository userRepository
  ) {
    this.blogRepository = blogRepository;
    this.userRepository = userRepository;
  }

  @Override
  public Blog save(Blog blog) {
    BlogDataMapper dataMapper = BlogDataMapper.from(blog);
    dataMapper = this.blogRepository.save(dataMapper);
    return toBlog(dataMapper);
  }

  @Override
  public Blog update(String id, Blog entity) {
    BlogDataMapper dataMapper = BlogDataMapper.from(entity);
    dataMapper = this.blogRepository.save(dataMapper);
    return toBlog(dataMapper);
  }

  @Override
  public Blog findOneById(String id) {
    Optional<BlogDataMapper> optionalDataMapper =
      this.blogRepository.findById(id);
    if (optionalDataMapper.isPresent()) {
      BlogDataMapper dataMapper = optionalDataMapper.get();
      User user = this.userRepository.findOneById(dataMapper.getUserId());
      dataMapper.setUser(UserDataMapper.from(user));
      return toBlog(dataMapper);
    }
    return null;
  }

  @Override
  public List<Blog> findAll() {
    List<BlogDataMapper> dataMappers = this.blogRepository.findAll();
    List<String> ids = dataMappers
      .stream()
      .map(mapper -> mapper.getUserId())
      .toList();
    List<User> users = this.userRepository.findAllByIds(ids);
    return IntStream
      .range(0, dataMappers.size())
      .mapToObj(i -> {
        BlogDataMapper blog = dataMappers.get(i);
        int index = IntStream
          .range(0, users.size())
          .filter(j -> users.get(j).getId().equals(blog.getUserId()))
          .findFirst()
          .orElse(-1);

        User user = users.get(index);

        return Blog
          .builder()
          .id(blog.getId())
          .title(blog.getTitle())
          .text(blog.getText())
          .image(String.format("%s/%s", UserData.BASE_URL, blog.getImage()))
          .user(user)
          .build();
      })
      .collect(Collectors.toList());
  }

  @Override
  public void deleteById(String id) {
    this.blogRepository.deleteById(id);
  }

  public static Blog toBlog(BlogDataMapper dataMapper) {
    return Blog
      .builder()
      .id(dataMapper.getId())
      .title(dataMapper.getTitle())
      .text(dataMapper.getText())
      .image(String.format("%s/%s", UserData.BASE_URL, dataMapper.getImage()))
      .user(UserRepositoryImpl.toUser(dataMapper.getUser()))
      .build();
  }
}
