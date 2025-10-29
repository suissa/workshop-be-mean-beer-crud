# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "quantal64"
  config.vm.box_url = "https://github.com/downloads/roderik/VagrantQuantal64Box/quantal64.box"
  config.vm.network :private_network, ip: "192.168.33.10"
  config.vm.synced_folder ".", "/nodejs/workshop-be-mean-beer-crud"
  config.vm.provider :virtualbox do |vb|
    vb.customize ["modifyvm", :id, "--memory", "1024"]
    vb.customize ["modifyvm", :id, "--name", "workshop-be-mean-beer-crud"]
  end
  config.vm.provision :shell, :path => "install.sh"
end
