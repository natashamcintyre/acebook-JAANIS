class PostSerializer
  include FastJsonapi::ObjectSerializer
  attributes :message, :created_at, :updated_at, :belongs_to, :""
end
