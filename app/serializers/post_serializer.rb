class PostSerializer < ActiveModel::Serializer
  attributes :id, :message, :updated_at
  attribute :created_at do 
    object.created_at.strftime("%H:%M %A %B %-d")
  end 
  belongs_to :user
end
