class KudoSerializer
  include FastJsonapi::ObjectSerializer
  attributes :sender_id, :receiver_id, :kudo_type_id
end
