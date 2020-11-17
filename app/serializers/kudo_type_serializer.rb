class KudoTypeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :icon, :color
end
