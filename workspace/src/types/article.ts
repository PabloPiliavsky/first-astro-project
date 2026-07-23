export interface DevToUser {
  name: string;
  profile_image_90: string;
}

export interface DevToArticle {
  id: number;
  title: string;
  description: string;
  url: string;
  cover_image: string | null;
  readable_publish_date: string;
  tag_list: string[];
  user: DevToUser;
}
