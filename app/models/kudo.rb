class Kudo < ApplicationRecord
  belongs_to :sender,   class_name: "Character"
  belongs_to :receiver, class_name: "Character"
  belongs_to :kudo_type
end
