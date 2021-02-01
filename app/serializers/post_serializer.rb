class PostSerializer
  include FastJsonapi::ObjectSerializer
  attributes :message, :created_at, :updated_at, :user_id
  belongs_to :user
end
