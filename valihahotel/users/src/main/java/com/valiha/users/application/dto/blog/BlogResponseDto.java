package com.valiha.users.application.dto.blog;

import com.valiha.users.application.dto.user.UserResponseDto;
import com.valiha.users.core.entities.model.Blog;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BlogResponseDto {

  private String id;
  private String title;
  private String text;
  private UserResponseDto user;
  private String image;

  public static BlogResponseDto from(Blog blog) {
    return BlogResponseDto
      .builder()
      .id(blog.getId())
      .title(blog.getTitle())
      .text(blog.getText())
      .user(UserResponseDto.from(blog.getUser()))
      .image(blog.getImage())
      .build();
  }

  public static List<BlogResponseDto> from(List<Blog> blogs) {
    return blogs.stream().map(blog -> BlogResponseDto.from(blog)).toList();
  }
}
