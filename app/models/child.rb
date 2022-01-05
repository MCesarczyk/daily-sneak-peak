class Child < ApplicationRecord
  has_many :activities, dependent: :destroy
end
