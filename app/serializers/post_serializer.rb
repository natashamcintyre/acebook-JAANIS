class PostSerializer < ActiveModel::Serializer
  attributes :id, :message, :updated_at
  attribute :created_at do
    object.created_at.strftime("%I:%M%p - %m/%d/%Y ")
  end
  belongs_to :user
end
