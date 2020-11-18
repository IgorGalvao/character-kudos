class Character < ApplicationRecord
  has_many :sent_kudos,     class_name: "Kudo", foreign_key: "sender_id"
  has_many :received_kudos, class_name: "Kudo", foreign_key: "receiver_id"

  validates :name, :image_url, presence: true

  before_create :slugify

  def slugify
    self.slug = name.parameterize
  end
end
