package com.valiha.users.infrastructure.data;

import com.valiha.users.core.entities.model.Blog;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(value = "blogs")
public class BlogDataMapper {

  @Id
  private String id;

  private String title;
  private String text;
  private String image;
  private String userId;

  @Transient
  private UserDataMapper user;

  public static BlogDataMapper from(Blog blog) {
    return BlogDataMapper
      .builder()
      .id(blog.getId())
      .title(blog.getTitle())
      .text(blog.getText())
      .image(blog.getImage())
      .userId(blog.getUser().getId())
      .user(UserDataMapper.from(blog.getUser()))
      .build();
  }
}
