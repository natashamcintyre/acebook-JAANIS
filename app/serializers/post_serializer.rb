class PostSerializer < ActiveModel::Serializer
  attributes :id, :message, :created_at, :updated_at

  belongs_to :user
end
