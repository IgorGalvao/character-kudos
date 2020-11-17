class KudoType < ApplicationRecord
  validates :name, :icon, :color, presence: true
end
